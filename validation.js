$('form').on('submit', function (e) {
  validate(e);
});

function validate(e) {
  var valid = [];
  var invalid = [];
  var num = 1;

  // Check all data-required tags
  $('[data-required]').each(function () {
    var textInputs = $(this).find('input[type="text"]');
    var radioInputs = $(this).find('input[type="radio"]');
    var checkboxInputs = $(this).find('input[type="checkbox"]');
    var textAreas = $(this).find('textarea');

    var selected = false;
    var id;
    var formGroup;
    var text;
    var errorMessage;

    // Checkboxes
    if (checkboxInputs.length > 0) {
      formGroup = $(this).find('.form-group');
      id = $(this).find('input').attr('id');
      selected = false;

      $(checkboxInputs).each(function () {
        if ($(this).parent().hasClass('selected')) {
          selected = true;
          return;
        }
      });

      if (selected === false) {
        invalid.push($(this).find('input').attr('name'));
        text = $(this).parents('.form-group').prev('h2').text();
        errorMessage = $(this).attr('data-error');

        if (errorMessage === undefined) {
          errorMessage = 'choose an option';
        }

        if ($(this).find('.error-message').length === 0) {
          formGroup.addClass('error');
          formGroup.prepend(
            String(
              '<span id="error-message-' + num + '" class="error-message">' + errorMessage + '</span>'
            )
          );

          $('.error-summary-list:first').append(
            String(
              '<li><a href="#' + id + '">- ' + text + ' - ' + errorMessage.toLowerCase() + '</a></li>'
            )
          );
        }
      } else {
        formGroup.removeClass('error');
        formGroup.find('.error-message').remove();
        $('.error-summary-list').find('a[href="#' + id + '"]').remove();
      }

      num++;
    }

    // Radios
    if (radioInputs.length > 0) {
      formGroup = $(this).find('.form-group');
      id = $(this).find('input').attr('id');
      selected = false;

      $(radioInputs).each(function () {
        if ($(this).parent().hasClass('selected')) {
          selected = true;
          return;
        }
      });

      if (selected === false) {
        invalid.push($(this).find('input').attr('name'));
        text = $(this).parents('.form-group').prev('h2').text();

        errorMessage = $(this).attr('data-error');

        if (errorMessage === undefined) {
          errorMessage = 'choose an option';
        }

        if ($(this).find('.error-message').length === 0) {
          formGroup.addClass('error');
          formGroup.prepend(
            String(
              '<span id="error-message-' + num + '" class="error-message">' + errorMessage + '</span>'
            )
          );

          $('.error-summary-list:first').append(
            String(
              '<li><a href="#' + id + '">- ' + text + ' - ' + errorMessage.toLowerCase() + '</a></li>'
            )
          );
        }
      } else {
        formGroup.removeClass('error');
        formGroup.find('.error-message').remove();
        $('.error-summary-list').find('a[href="#' + id + '"]').remove();
      }

      num++;
    }

    // Text inputs
    if (textInputs.length > 0) {
      $(textInputs).each(function () {
        var id = $(this).attr('id');
        var formGroup = $(this).parents('.form-group');
        var label = $('label[for="' + $(this).attr('id') + '"]');
        var errorMessage = $(this).parents('fieldset').attr('data-error');

        if ($(this).val().length === 0) {
          invalid.push($(this).attr('id'));
          // Get the text from the label and remove any hint text
          var text = $(this).parents('.form-group').find('label').html();
          text = text.replace(/(<span class=")(.*)(">)(.*)(<\/span>)/, '');

          // If there is no error message set, then make a default one
          if (errorMessage === undefined) {
            errorMessage = 'There is an error';
          }

          // Find the formgroup for this input and add the error class
          formGroup.addClass('error');
          label.css('font-weight', 'bold');

          // If the error message is not already showing, add it to the page
          if ($(this).parents('.form-group').find('.error-message').length === 0) {
            label.after(
              String(
                '<span id="error-message-' + num + '" class="error-message">' + errorMessage + '</span>'
              )
            );

            // Add the error to the summary list at the top of the page
            $('.error-summary-list:first').append(
              String(
                '<li><a href="#' + id + '">- ' + text + ' - ' + errorMessage.toLowerCase() + '</a></li>'
              )
            );

            num++;
          }
        } else {
          valid.push($(this).attr('id'));
          $(this).parents('.form-group').removeClass('error');
          $(this).parents('.form-group').find('.error-message').remove();
          $('.error-summary-list').find('a[href="#' + id + '"]').remove();
        }
      });
    }

    // Textareas
    if (textAreas.length > 0) {
      $(textAreas).each(function () {
        var id = $(this).attr('id');
        var formGroup = $(this).parents('.form-group');
        var label = $('label[for="' + $(this).attr('id') + '"]');
        var errorMessage = $(this).parents('fieldset').attr('data-error');

        if ($(this).val().length === 0) {
          invalid.push($(this).attr('id'));
          // Get the text from the label and remove any hint text
          var text = $(this).parents('.form-group').find('label').html();
          text = text.replace(/(<span class=")(.*)(">)(.*)(<\/span>)/, '');

          // If there is no error message set, then make a default one
          if (errorMessage === undefined) {
            errorMessage = 'There is an error';
          }

          // Find the formgroup for this input and add the error class
          formGroup.addClass('error');
          label.css('font-weight', 'bold');

          // If the error message is not already showing, add it to the page
          if ($(this).parents('.form-group').find('.error-message').length === 0) {
            label.after(
              String(
                '<span id="error-message-' + num + '" class="error-message">' + errorMessage + '</span>'
              )
            );

            // Add the error to the summary list at the top of the page
            $('.error-summary-list:first').append(
              String(
                '<li><a href="#' + id + '">- ' + text + ' - ' + errorMessage.toLowerCase() + '</a></li>'
              )
            );

            num++;
          }
        } else {
          valid.push($(this).attr('id'));
          $(this).parents('.form-group').removeClass('error');
          $(this).parents('.form-group').find('.error-message').remove();
          $('.error-summary-list').find('a[href="#' + id + '"]').remove();
        }
      });
    }
  });

  // If there is more than one invalid field
  if (invalid.length > 0) {
    // Stop the form from submitting
    e.preventDefault();
    // Show the error summary
    $('.error-summary:first').show();
    // Scroll to the top of the page
    $('body').scrollTop(0);
  }
}
