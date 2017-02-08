(function () {
  $('.test').on('click', function () {
    $.getJSON('includes/getCar.php', { model:this.id }, function (data) {
      console.log(data);

      $('.hidden').removeClass('hidden');

      $('.modelName').text(data.modelName);
      $('.pricing').text(data.pricing);
      $('.modelDetails').text(data.modelDetails);


    });
  });

})();
