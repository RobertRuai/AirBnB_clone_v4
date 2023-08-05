$('document').ready(function () {
  let c_amenities = [];
  let amenity = '';
  $('INPUT#checked_amenity').change(function () {
    if (this.checked) {
      amenity = $(this).parent().text().trim();
      c_amenities.push(amenity);
    } else {
      amenity = $(this).parent().text().trim();
      if (c_amenities.length != 0) {
        c_amenities = arrayRemove(c_amenities, amenity);
      }
    }
    console.log(c_amenities.join(', '));
    $('DIV.amenities H4').text(c_amenities.join(', '));
  });
});

const arrayRemove = (arr, val) => {
  return arr.filter(cur => {
    return cur != val;
  });
};
