using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int userId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int total { get; set; }
    }
}
