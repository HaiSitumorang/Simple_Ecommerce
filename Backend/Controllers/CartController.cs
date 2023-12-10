using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : Controller
    {
        private readonly AppDbContext _db;
        public CartController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("/CartList")]
        public ActionResult GetCartList()
        {
            var result = (from a in _db.Carts
                          join b in _db.Products
                          on a.productId equals b.Id
                          join c in _db.Categories
                          on b.CategoryId equals c.Id
                          select new
                          {
                              Id = a.Id,
                              ProductId = b.Id,
                              ProductName = b.Name,
                              Price = b.Price * a.total,
                              Total = a.total,
                              CategoryName = c.Name,
                          })
                          .OrderBy(x => x.Id)
                          .ToList();

            return Ok(result);
        }
        [HttpGet]
        [Route("/CartList/{id}")]
        public ActionResult GetCartListbyId(int id)
        {
            var result = _db.Carts.Where(x => x.productId == id).ToList();

            return Ok(result);
        }
        [HttpPost]
        public ActionResult CreteCart(Cart obj)
        {
            try
            {
                if (obj.Id == 0)
                {
                    _db.Carts.Add(obj);
                    _db.SaveChanges();
                }
                else
                {
                    _db.Carts.Update(obj);
                    _db.SaveChanges();
                }

                return Ok(obj);
            }
            catch(Exception ex)
            {
                return Ok(false);
            }
        }
        [HttpGet]
        [Route("/RemoveCart/{id}")]
        public ActionResult RemoveCartbyId(int id)
        {
            try
            {
                var result = _db.Carts.Where(x => x.Id == id).ToList();
                if (result.Count > 0)
                {
                    _db.Carts.Remove(result[0]);
                    _db.SaveChanges();
                }

                return Ok(true);
            }
            catch (Exception ex)
            {
                return Ok(false);
            }
        }
    }
}
