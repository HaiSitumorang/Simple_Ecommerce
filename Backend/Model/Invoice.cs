using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string InvoiceNumber { get; set; }
        [Required]
        public int TotalProduct { get; set; }
        [Required]
        public decimal TotalAmount { get; set; }
        [Required]
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}
