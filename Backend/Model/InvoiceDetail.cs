using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class InvoiceDetail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int InvoiceId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int TotalProduct { get; set; }
    }
}
