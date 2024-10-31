const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const comment = document.querySelector('#list-comment');
const commentItem = document.querySelectorAll('#list-comment .item');
var translateY = 0;
var count = commentItem.length;

// Hàm để lấy chiều cao của bình luận (item)
function getItemHeight() {
  return commentItem[0].clientHeight; // Lấy chiều cao của một item
}

var itemHeight = getItemHeight(); // Lấy chiều cao của item lúc đầu

// Cập nhật chiều cao dịch chuyển khi kích thước màn hình thay đổi
window.addEventListener('resize', function () {
  itemHeight = getItemHeight();
  translateY = 0;
  comment.style.transform = `translateY(${translateY}px)`;
  count = commentItem.length; // Reset lại count khi thay đổi kích thước màn hình
});

// Sự kiện khi nhấn nút Next
next.addEventListener('click', function (event) {
  event.preventDefault();
  if (count == 1) {
    // Đã xem hết bình luận
    return false;
  }
  translateY += -itemHeight;
  comment.style.transform = `translateY(${translateY}px)`;
  count--;
});

// Sự kiện khi nhấn nút Prev
prev.addEventListener('click', function (event) {
  event.preventDefault();
  if (count == commentItem.length) {
    // Quay lại đầu danh sách bình luận
    return false;
  }
  translateY += itemHeight;
  comment.style.transform = `translateY(${translateY}px)`;
  count++;
});
