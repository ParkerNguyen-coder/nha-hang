const menuItems = [
  {name: "Sushi đặc biệt", img: "/ảnh/sushi.jpg", desc: "Nguyên liệu tươi ngon, giòn & mềm — chuẩn Nhật", price: "120.000đ"},
  {name: "Bò nướng sốt tiêu", img: "/ảnh/cach-uop-thit-bo.jpg", desc: "Thịt bò mềm, sốt thơm cay nhẹ", price: "180.000đ"},
  {name: "Phở bò truyền thống", img: "/ảnh/pho-bo-bap-hoa-500.jpg", desc: "Nước dùng thanh ngọt, chuẩn vị Việt", price: "60.000đ"},
  {name: "Bánh ngọt Pháp", img: "/ảnh/unnamed.jpg", desc: "Tinh tế, mềm mịn — hương vị Paris", price: "90.000đ"},
  {name: "Tôm hùm nướng bơ tỏi", img: "/ảnh/tom hum.jpg", desc: "Tôm hùm nướng vàng ruộm, sốt bơ tỏi thơm lừng", price: "750.000đ"},
  {name: "Gan ngỗng Pháp áp chảo", img: "/ảnh/gan ngong.png", desc: "Foie gras hảo hạng, béo ngậy tan chảy", price: "680.000đ"},
  {name: "Salad cá hồi hun khói", img: "/ảnh/salad-ca-hoi__7_.jpg", desc: "Cá hồi Na Uy, rau hữu cơ tươi mát", price: "150.000đ"},
  {name: "Thịt cừu nướng Rosemary", img: "/ảnh/Thịt cừu nướng Rosemary.jpg", desc: "Cừu Úc, thảo mộc châu Âu thơm dịu", price: "420.000đ"},
  {name: "Mì Ý sốt kem nấm", img: "/ảnh/Mì Ý sốt kem nấm.jpg", desc: "Sốt kem béo ngậy, nấm rừng tươi", price: "190.000đ"},
  {name: "Cá hồi sốt chanh dây", img: "/ảnh//Cá hồi sốt chanh dây.jpg", desc: "Vị chua nhẹ, cân bằng vị giác", price: "250.000đ"},
  {name: "Sườn non BBQ", img: "/ảnh/Sườn non BBQ.jpg", desc: "Thịt sườn mềm, sốt đậm đà Mỹ", price: "270.000đ"},
  {name: "Lasagne", img: "/ảnh/Lasagna.jpg", desc: "Béo ngậy, mới lạ, đẫm sốt", price: "250.000đ"},
  {name: "Salad cá ngừ", img: "/ảnh/salad-ca-ngu.png", desc: "Béo bùi, healthy, cá ngừ đại dương đầy dinh dưỡng", price: "350.000đ"},
  {name: "escargot bourguignon", img: "/ảnh/escargot bourguignon.jpg", desc: " Hương vị độc đáo từ ốc sên pháp mang tới trải nghiểm ẩm thực mới lạ", price: "120.000đ"},
  {name: "Steak Wagyu Nhật Bản", img: "/ảnh/Steak Wagyu Nhật Bản.jpg", desc: "Thịt bò cao cấp, mềm tan", price: "950.000đ"},
  {name: "Tôm tempura Nhật", img: "/ảnh/mon-tempura.jpg", desc: "Tôm chiên giòn rụm, không ngấy", price: "360.000đ"},
  {name: "Súp kem bí đỏ", img: "/ảnh/Súp kem bí đỏ.jpg", desc: "Súp kem nhẹ, ngọt dịu tự nhiên", price: "180.000đ"},
  {name: "Bánh tiramisu Ý", img: "/ảnh/Bánh tiramisu Ý.jpg", desc: "Ngọt nhẹ, mềm mịn, vị cà phê Ý", price: "95.000đ"},
  {name: "Cocktail Signature", img: "/ảnh/images.jfif", desc: "Độc đáo & tinh tế, sáng tạo riêng", price: "180.000đ"},
  {name: "Sparkling water", img: "/ảnh/Sparkling-Water.jpg", desc: "Nước đóng trai cao cấp", price: "130.000đ"}
];

const menuList = document.getElementById("menu-list");

menuList.innerHTML = menuItems.map(item => `
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card shadow-sm h-100">
      <img src="${item.img}" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.desc}</p>
        <p class="price">${item.price}</p>
      </div>
    </div>
  </div>
`).join('');
