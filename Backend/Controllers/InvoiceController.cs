using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InvoiceController : Controller
    {
        private readonly AppDbContext _db;
        public InvoiceController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("/InvoiceList")]
        public ActionResult GetInvoiceList()
        {
            var result = _db.Invoices.ToList();

            return Ok(result);
        }
        [HttpGet]
        [Route("/InvoiceDetail")]
        public ActionResult GetInvoice(int id)
        {
            try
            {
                var invoiceHeader = _db.Invoices.Where(x => x.Id == id).ToList();

                var invoiceDetail = (from a in _db.InvoiceDetails
                                     join b in _db.Products
                                     on a.productId equals b.Id
                                     join c in _db.Categories
                                     on b.CategoryId equals c.Id
                                     select new
                                     {
                                         Id = a.Id,
                                         InvoiceId = a.InvoiceId,
                                         ProductName = b.Name,
                                         Price = b.Price * a.TotalProduct,
                                         Total = a.TotalProduct,
                                         CategoryName = c.Name,
                                     })
                              .Where(x => x.InvoiceId == invoiceHeader[0].Id)
                              .ToList();

                return Ok(new { invoiceDetail, invoiceHeader });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public ActionResult CreteInvoice(List<int> cartIdList)
        {
            try
            {
                if (cartIdList.Count > 0)
                {
                    var cartList = (from a in _db.Carts
                                    join b in _db.Products
                                    on a.productId equals b.Id
                                    where cartIdList.Contains(a.Id)
                                    select new
                                    {
                                        Id = a.Id,
                                        ProductId = b.Id,
                                        ProductName = b.Name,
                                        Price = b.Price * a.total,
                                        Total = a.total,
                                    })
                                .ToList();

                    int totalProduct = cartList.Sum(x => x.Total);
                    decimal totalAmount = cartList.Sum(x => x.Price);
                    var invoiceList = _db.Invoices.OrderByDescending(x => x.Id).Take(1).ToList();
                    string invoiceNum = "";

                    if (invoiceList.Count() == 0)
                    {
                        invoiceNum = "INV00001";
                    }
                    else
                    {
                        invoiceNum = invoiceList[0].InvoiceNumber.Substring(3);
                        int num = Convert.ToInt32(invoiceNum) + 1;

                        invoiceNum = "INV" + num.ToString().PadLeft(5, '0');
                    }

                    Invoice invoice = new Invoice
                    {
                        InvoiceNumber = invoiceNum,
                        TotalProduct = totalProduct,
                        TotalAmount = totalAmount,
                        CreateDate = DateTime.Now,
                    };

                    using (TransactionScope scope = new TransactionScope())
                    {

                        _db.Invoices.Add(invoice);

                        _db.SaveChanges();

                        //Create Invoice Detail
                        foreach (var cart in cartList)
                        {
                            _db.InvoiceDetails.Add(
                                new InvoiceDetail
                                {
                                    InvoiceId = invoice.Id,
                                    productId = cart.ProductId,
                                    TotalProduct = cart.Total
                                });

                            List<Cart> cartTemp = _db.Carts.Where(x => x.Id == cart.Id).ToList();
                            _db.Carts.Remove(cartTemp[0]);
                        }
                        _db.SaveChanges();
                        scope.Complete();
                    }
                }

                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
