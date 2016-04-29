# Validation plugin for GOVUK Prototypes

This plugin will allow you to add simple validation to your prototype project. You can set any text inputs, radio buttons or checkboxes to require they be filled in.

**WARNING: For prototypes only. Do not use in production under any circumstances**

![Validation](https://raw.githubusercontent.com/abbott567/validation-for-prototypes/screenshots/screenshots/validation.gif?raw=true "Validation")

### How does it work?

The plugin uses jQuery to check any `<fieldset>` tags you have applied the data attribute of `data-required` to. It then checks you have made a selection or entered some characters. If the validation fails, the browser scrolls to the top of the page and shows the error message.

Custom error messages can be passed in with `data-error="custom error message text"`.

### Installation

1) Download the file [validation.js](https://github.com/abbott567/validation-for-prototypes/blob/master/validation.js) and put it into the directory `app/assets/javascripts`. 

2) In your `head.html` file, which is located in the `app/views/includes` directory, paste the following code at the end:

``` javascript
  <script src="/public/javascripts/validation.js"></script>
```

3) Add the following error-summary HTML to the top of the page you want validating.  
*Nunjucks tip: you could put this in it's own file in `app/views/includes` and use {% include 'includes/error.html' %}*

``` html
<div class="error-summary" role="group" style="display:none;">
  <h1 class="heading-medium error-summary-heading" id="error-summary-heading">
    There's been a problem
  </h1>

  <p>
    Check the following:
  </p>

  <ul class="error-summary-list">
  </ul>
</div>
```

### Synax / Markup

Once you have installed the kit, you just need to add the `data-required` target to any fieldset you want validating. See below for examples of each input type. 


##### Text input

``` html
<div class="form-group">
  <fieldset data-required data-error="Cannot be blank">
    <label class="form-label" for="first-name">
      First name
      <span class="form-hint">Form hint</span>
    </label>
    
    <input class="form-control" id="first-name" name="first-name" type="text">
  </fieldset>
</div>
```

##### Text area

``` html
<div class="form-group">
  <fieldset data-required data-error="Cannot be blank">
    <label class="form-label" for="textarea">
      Text area
      <span class="form-hint">Form hint.</span>
    </label>

    <textarea rows="5" cols="30" class="form-control" id="textarea" name="textarea"></textarea>
  </fieldset>
</div>
```

##### Radio Buttons

``` html
<h2 class="heading-medium">Do you already have a personal user account?</h2>
<div class="form-group">
  <fieldset class="inline" data-required data-error="Choose yes or no">
    <legend class="visuallyhidden">Do you already have a personal user account?</legend>

    <div class="form-group">
      <label class="block-label" for="radio-inline-1">
        <input id="radio-inline-1" type="radio" name="radio-inline-group" value="Yes">
        Yes
      </label>

      <label class="block-label" for="radio-inline-2">
        <input id="radio-inline-2" type="radio" name="radio-inline-group" value="No">
        No
      </label>
    </div>
  </fieldset>
</div>
```

##### Checkboxes

``` html
<h2 class="heading-medium">Which types of waste do you transport regularly?</h2>
<div class="form-group">
  <fieldset data-required data-error="Choose at least one option">
    <legend class="visuallyhidden">Which types of waste do you transport regularly?</legend>

    <div class="form-group">
      <label class="block-label" for="waste-type-1">
        <input id="waste-type-1" name="waste-types" type="checkbox" value="waste-animal">
        Waste from animal carcasses
      </label>

      <label class="block-label" for="waste-type-2">
        <input id="waste-type-2" name="waste-types" type="checkbox" value="waste-mines">
        Waste from mines or quarries
      </label>

      <label class="block-label" for="waste-type-3">
        <input id="waste-type-3" name="waste-types" type="checkbox" value="waste-farm-agricultural">
        Farm or agricultural waste
      </label>
    </div>
  </fieldset>
</div>
```


