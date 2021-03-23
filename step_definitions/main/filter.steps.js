const { I } = inject();
const { filter } = require("../../pages/filter_element");
const { environment, inputFilter } = require("../../utils/constants");
// Add in your custom step files

Given("user open amazon website", () => {
  I.amOnPage(environment.BASE_URL);
});

Given("user fill filter form with macbook", () => {
  filter.fillFilter(inputFilter.itemName);
});

Given("user click on button filter", () => {
  filter.clickButtonFiltter();
});

Then("user can see list data about macbook", () => {
  filter.checkDisplayedItem();
});
