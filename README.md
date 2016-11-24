# Validation plugin for GOVUK Prototypes

This plugin will allow you to add simple validation to your GOVUK prototype. You can check text inputs and textareas are not blank, and make sure at least one option is selected on radios and checkboxes.

**WARNING: For prototypes only. Do not use in production under any circumstances**

![Demonstration of validation](https://raw.githubusercontent.com/abbott567/validation-for-prototypes/images/images/validation.gif "Validation Demonstration")

### How does it work?

The plugin uses jQuery to check any `<fieldset>` tags you have applied the data attribute of `data-required` to. It then checks you have made a selection or entered some characters. If the validation fails, the browser scrolls to the top of the page and shows the error message.

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
<div class="form-group">
  <fieldset data-required data-error="Cannot be blank">
    <legend class="heading-medium">Do you have difficulty completing daily activities</legend>

    <label class="form-label" for="circumstances">
      Tell us about your circumstances
    </label>

    <textarea id="circumstances" rows="5" cols="30" class="form-control" name="circumstances"></textarea>
  </fieldset>
</div>
```

##### Text input

``` html
<div class="form-group">
  <fieldset data-required data-error="Cannot be blank">
    <label class="form-label-bold" for="full-name">
      Full name
      <span class="form-hint">As shown on your birth certificate or passport</span>
    </label>
    <input id="full-name" class="form-control" name="full-name" type="text">
  </fieldset>
</div>
```

##### Date of Birth

``` html
<div class="form-group">
  <fieldset data-required data-error="Cannot be blank">
    <legend class="form-label-bold">Date of birth</legend>
    <p class="form-hint" id="dob-hint">For example, 31 3 1980</p>

    <div class="form-date">
      <div class="form-group form-group-day">
        <label for="dob-day">Day</label>
        <input class="form-control" id="dob-day" name="dob-day" type="text" pattern="[0-9]*" min="0" max="31" aria-describedby="dob-hint">
      </div>

      <div class="form-group form-group-month">
        <label for="dob-month">Month</label>
        <input class="form-control" id="dob-month" name="dob-month" type="text" pattern="[0-9]*" min="0" max="12">
      </div>

      <div class="form-group form-group-year">
        <label for="dob-year">Year</label>
        <input class="form-control" id="dob-year" name="dob-year" type="text" pattern="[0-9]*" min="0" max="2016">
      </div>
    </div>
  </fieldset>
</div>
```

##### Radio Buttons

``` html
<div class="form-group">
  <fieldset class="inline" data-required data-error="Choose yes or no">
    <legend class="heading-medium">Do have a personal user account?</legend>

    <label class="block-label" for="radio-inline-1">
      <input id="radio-inline-1" type="radio" name="radio-inline-group" value="Yes">
      Yes
    </label>

    <label class="block-label" for="radio-inline-2">
      <input id="radio-inline-2" type="radio" name="radio-inline-group" value="No">
      No
    </label>
  </fieldset>
</div>
```

##### Checkboxes

``` html
<div class="form-group">
  <fieldset data-required data-error="Choose at least one option">
    <legend class="heading-medium">Which documents do you have?</legend>

    <label class="block-label" for="passport">
      <input id="passport" name="doc-types" type="checkbox" value="passport">
      Passport
    </label>

    <label class="block-label" for="driving-licence">
      <input id="driving-licence" name="doc-types" type="checkbox" value="driving-licence">
      Driving licence
    </label>

    <label class="block-label" for="birth-certificate">
      <input id="birth-certificate" name="doc-types" type="checkbox" value="birth-certificate">
      Birth certificate
    </label>
  </fieldset>
</div>
```

