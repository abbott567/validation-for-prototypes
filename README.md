# Validation plugin for GOVUK Prototypes

This plugin will allow you to add simple validation to your GOVUK prototype. You can check text inputs and textareas are not blank, and make sure at least one option is selected on radios and checkboxes.

There are a set of tests you can run against this code to check it is working as expected. You can get the tests here:
[https://github.com/abbott567/validation-for-prototypes-tests](https://github.com/abbott567/validation-for-prototypes-tests "Validation Tests")
###**WARNING: For prototypes only. Do not use in production under any circumstances**

![Demonstration of validation](https://raw.githubusercontent.com/abbott567/validation-for-prototypes/images/images/validation.gif "Validation Demonstration")


### How does it work?

The plugin uses jQuery to check any divs with the `.form-group` class you have applied the data attribute of `data-required` to. It then checks you have made a selection or entered some characters. If the validation fails, the browser scrolls to the top of the page and shows the error message.

Custom error messages can be passed in with `data-error="custom error message text"`.

### Installation

1) Download the file [validation.js](https://github.com/abbott567/validation-for-prototypes/blob/master/validation.js) and put it into the directory `app/assets/javascripts`. 

2) In your `scripts.html` file, which is located in the `app/views/includes` directory, paste the following code at the end:

``` javascript
  <script src="/public/javascripts/validation.js"></script>
```
That's it! Happy validating.

### Markup examples

In order to make the validation work, your HTML markup must be correct. Below are examples of each input type.

##### Textarea

``` html
<div class="form-group" data-required data-error="Cannot be blank">
    <legend class="heading-medium">Do you have difficulty completing daily activities</legend>

    <label class="form-label" for="circumstances">
      Tell us about your circumstances
    </label>

    <textarea id="circumstances" rows="5" cols="30" class="form-control" name="circumstances"></textarea>
</div>
```

##### Text input

``` html
<div class="form-group" data-required data-error="Cannot be blank">
    <label class="form-label-bold" for="full-name">
      Full name
      <span class="form-hint">As shown on your birth certificate or passport</span>
    </label>
    <input id="full-name" class="form-control" name="full-name" type="text">
</div>
```

##### Date of Birth

``` html
<div class="form-group">
    <legend class="form-label-bold">Date of birth</legend>
    <p class="form-hint" id="dob-hint">For example, 31 3 1980</p>

    <div class="form-date">
      <div class="form-group form-group-day" data-required data-error="Cannot be blank">
        <label for="dob-day">Day</label>
        <input class="form-control" id="dob-day" name="dob-day" type="text" pattern="[0-9]*" min="0" max="31" aria-describedby="dob-hint">
      </div>

      <div class="form-group form-group-month" data-required data-error="Cannot be blank">
        <label for="dob-month">Month</label>
        <input class="form-control" id="dob-month" name="dob-month" type="text" pattern="[0-9]*" min="0" max="12">
      </div>

      <div class="form-group form-group-year" data-required data-error="Cannot be blank">
        <label for="dob-year">Year</label>
        <input class="form-control" id="dob-year" name="dob-year" type="text" pattern="[0-9]*" min="0" max="2016">
      </div>
    </div>
</div>
```

##### Radio Buttons

``` html
<div class="form-group" data-required data-error="Choose yes or no">
    <fieldset>

      <legend>
        <h1 class="heading-medium">Where do you live?</h1>
      </legend>

      <div class="multiple-choice">
        <input id="radio-1" type="radio" name="radio-group" value="Northern Ireland">
        <label for="radio-1">Northern Ireland</label>
      </div>
      <div class="multiple-choice">
        <input id="radio-2" type="radio" name="radio-group" value="Isle of Man or the Channel Islands">
        <label for="radio-2">Isle of Man or the Channel Islands</label>
      </div>
      <p class="form-block">or</p>
      <div class="multiple-choice">
        <input id="radio-3" type="radio" name="radio-group" value="I am a British citizen living abroad">
        <label for="radio-3">I am a British citizen living abroad</label>
      </div>

    </fieldset>
</div>
```

##### Checkboxes

``` html
<div class="form-group" data-required data-error="Choose at least one option">
      <fieldset>

    <legend>
      <h3 class="heading-medium">Which types of waste do you transport regularly?</h3>
      <span class="body-text">Select all that apply</span>
    </legend>

    <div class="multiple-choice">
      <input id="waste-type-1" name="waste-types" type="checkbox" value="waste-animal">
      <label for="waste-type-1">Waste from animal carcasses</label>
    </div>
    <div class="multiple-choice">
      <input id="waste-type-2" name="waste-types" type="checkbox" value="waste-mines">
      <label for="waste-type-2">Waste from mines or quarries</label>
    </div>
    <div class="multiple-choice">
      <input id="waste-type-3" name="waste-types" type="checkbox" value="waste-farm-agricultural">
      <label for="waste-type-3">Farm or agricultural waste</label>
    </div>

  </fieldset>
</div>
```

