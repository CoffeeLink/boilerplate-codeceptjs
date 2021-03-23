const { I } = inject();
const { selector } = require("../utils/utils");
const { inputFilter } = require("../utils/constants");

const variable_filter = {
  fields: {
    filter: {
      id: selector.inputFilter,
    },
  },

  buttons: {
    filter: {
      id: selector.buttonFilter,
    },
  },
};

const filter = {
  fillFilter(filterItem) {
    I.fillField(variable_filter.fields.filter, filterItem);
  },

  clickButtonFiltter() {
    I.waitForClickable(variable_filter.buttons.filter);
    I.click(variable_filter.buttons.filter);
  },

  checkDisplayedItem() {
    I.waitToLoad();
    I.see(`"${inputFilter.itemName}"`, "span");
  },
};

module.exports = { filter };
