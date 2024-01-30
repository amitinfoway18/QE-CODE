$(document).ready(function() {
    document.querySelectorAll(".variant_block").forEach(function(variantBlock) {
        variantBlock.addEventListener("click", function(e) {
            e.preventDefault();

            var optionName = document.querySelector("input[type='radio']:checked").getAttribute("name");
            var selectedVariant = document.querySelector("input[name='" + optionName + "']:checked").value;

            var price = document.querySelector('.variant_image_src[data_variant_title="' + selectedVariant + '"]').getAttribute('data-price');
            var formattedPrice = (parseFloat(price) / 100).toFixed(2);

            var image = document.querySelector('.variant_image_src[data_variant_title="' + selectedVariant + '"]').getAttribute('src');

            var gridItemCustom = variantBlock.closest('.grid-item-custom');
            gridItemCustom.querySelector('img').classList.add('change-img');
            gridItemCustom.querySelector('img').setAttribute("srcset", image);
            gridItemCustom.querySelector('.price-item--sale').textContent = formattedPrice;
        });
    });

   $(document).on("click", "summary.header__menu-item, .menu-drawer__menu-item", function() {
      $('.slick-prev').click();
      $('.slider_tab_check').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
      }); 
    });

});