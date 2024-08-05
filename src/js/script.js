 //promotion code的应用，自动复制折扣码
function copyCode() {
    var copyText = document.getElementById("discountCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Copied the code: " + copyText.value);
    }, function() {
        alert("Failed to copy the code.");
    });
}

document.addEventListener('DOMContentLoaded', function () {
  // 定义颜色和对应的图片路径
  const colorImages = {
    'Gray concrete': [
      'assets/img/Promaxibinder/Products/new folder/06.png',
      'assets/img/Promaxibinder/Products/new folder/07.png',
      'assets/img/Promaxibinder/Products/new folder/08.png',
      'assets/img/Promaxibinder/Products/new folder/09.png'
    ],
    'Soft beige': [
      'assets/img/Promaxibinder/Products/product1.png',
      'assets/img/Promaxibinder/Products/product2.png',
      'assets/img/Promaxibinder/Products/product3.png',
      'assets/img/Promaxibinder/Products/product4.png'
    ],
    'Bluish sky': [
      'assets/img/Promaxibinder/Products/new folder/06.png',
      'assets/img/Promaxibinder/Products/new folder/07.png',
      'assets/img/Promaxibinder/Products/new folder/08.png',
      'assets/img/Promaxibinder/Products/new folder/09.png'
    ],
    'Green grass': [
      'assets/img/Promaxibinder/Products/product1.png',
      'assets/img/Promaxibinder/Products/product2.png',
      'assets/img/Promaxibinder/Products/product3.png',
      'assets/img/Promaxibinder/Products/product4.png'
    ],
    'Woody brown': [
      'assets/img/Promaxibinder/Products/product1.png',
      'assets/img/Promaxibinder/Products/product2.png',
      'assets/img/Promaxibinder/Products/product3.png',
      'assets/img/Promaxibinder/Products/product4.png'
    ]
  };

  // 获取所有颜色选择器和相关的DOM元素
  const colorOptions = document.querySelectorAll('input[name="color"]');
  const colorOptionLabel = document.getElementById('colorOption');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // 为每个颜色选择器添加事件监听器
  colorOptions.forEach(option => {
    option.addEventListener('change', function () {
      if (this.checked) {
        const selectedColor = this.value;
        const images = colorImages[selectedColor];
        colorOptionLabel.textContent = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);

        // 更新所有gallery item的图片
        galleryItems.forEach((item, index) => {
          if (index < images.length) {
            const img = item.querySelector('img');
            item.href = images[index];
            img.src = images[index];
            img.alt = `Product image #${index + 1}`;
          }
        });
      }
    });
  });

  // 初始加载默认选中的颜色图片
  const defaultColor = document.querySelector('input[name="color"]:checked').value;
  const images = colorImages[defaultColor];
  colorOptionLabel.textContent = defaultColor.charAt(0).toUpperCase() + defaultColor.slice(1);
  galleryItems.forEach((item, index) => {
    if (index < images.length) {
      const img = item.querySelector('img');
      item.href = images[index];
      img.src = images[index];
      img.alt = `Product image #${index + 1}`;
    }
  });
});
