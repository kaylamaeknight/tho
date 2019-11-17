$(function() {
  /* Step 2 */
  $('input[name="step2-correctInfo"]').on('change', function() {
    if($('input[name="step2-correctInfo"]:checked').val() == 1){

      $('input, select', '#confirmInfo').each(function( index ) {
        $(this).attr('disabled', 'disabled');
      });

      $('#step2-nextBtn').removeClass('d-none');
      $('#step2-updateBtn').addClass('d-none');

    }else if($('input[name="step2-correctInfo"]:checked').val() == 0){

      $('input, select', '#confirmInfo').each(function( index ) {
        $(this).removeAttr('disabled');
      });

      $('#step2-nextBtn').addClass('d-none');
      $('#step2-updateBtn').removeClass('d-none');

    }
  });

  /* Step 3 */
  $('input[name="step3-emergency"], input[name="step3-eviction"]').on('change', function() {
    if($('input[name="step3-emergency"]:checked').val() == 1 || $('input[name="step3-eviction"]:checked').val() == 1){

      $('#step3-notice').removeClass('d-none');
      $('#step3-nextBtn').addClass('d-none');

    }else if($('input[name="step3-emergency"]:checked').val() == 0 && $('input[name="step3-eviction"]:checked').val() == 0){
      $('#step3-notice').addClass('d-none');
      $('#step3-nextBtn').removeClass('d-none');
    }
  });

  /* Step 4 */
  $('input[name="step4-hasAppointment"]').on('change', function() {
    if($('input[name="step4-hasAppointment"]:checked').val() == 1){

      $('#step4-checkIn').removeClass('d-none');
      $('#step4-nextBtn').addClass('d-none');

    }else if($('input[name="step4-hasAppointment"]:checked').val() == 0){

      $('#step4-checkIn').addClass('d-none');
      $('#step4-nextBtn').removeClass('d-none');

    }
  });

  $('#step4-checkIn').on('click', function(){
    $('#step4-radios, #step4-checkIn, #step4-nextBtn').addClass('d-none');
    $('#step4-notice, #step4-close').removeClass('d-none');
  });

  /* Step 5 */
  $('input[name="step5-createAppointmentQuestion"]').on('change', function() {
    if($('input[name="step5-createAppointmentQuestion"]:checked').val() == 1){

      $('#step5-nextBtnYes').removeClass('d-none');
      $('#step5-nextBtnNo').addClass('d-none');

    }else if($('input[name="step5-createAppointmentQuestion"]:checked').val() == 0){

      $('#step5-nextBtnYes').addClass('d-none');
      $('#step5-nextBtnNo').removeClass('d-none');

    }
  });
});
