# Validation plugin for GOVUK Prototypes

This plugin will allow you to add simple validation to your prototype project. You can set any text inputs, radio buttons or checkboxes to require they be filled in.

##### How does it work?

The plugin uses jQuery to check any `<fieldset>` tags you have applied the data attribute of `data-required` to. It then checks you have made a selection or entered some characters. If the validation fails, the browser scrolls to the top of the page and shows the error message.



