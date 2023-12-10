using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly AppDbContext _db;
        public ProductController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("/ProductList")]
        public ActionResult GetProductList(int pageSize, int pageNumber)
        {
            int skipData = (pageNumber - 1) * pageSize;

            var result = (from a in _db.Products
                       join b in _db.Categories
                       on a.CategoryId equals b.Id
                       select new
                       {
                           Id = a.Id,
                           Name = a.Name,
                           Price = a.Price,
                           CategoryName = b.Name,
                       }).OrderBy(x => x.Id)
                        .Skip(skipData)
                        .Take(pageSize)
                        .ToList();

            return Ok(result);
        }
        [HttpGet]
        [Route("/ProductList/{id}")]
        public ActionResult GetProductListbyId(int id)
        {
            var result = (from a in _db.Products
                                      join b in _db.Categories
                                      on a.CategoryId equals b.Id
                                      select new
                                      {
                                          Id = a.Id,
                                          Name = a.Name,
                                          Price = a.Price,
                                          Description = a.Description,
                                          CategoryName = b.Name,
                                      })
                                      .Where(x => x.Id == id)
                                      .ToList();

            return Ok(result);
        }
    }
}
