sap.ui.define([], function () {
	"use strict";

	return {

        toUpperCase: function(word){
            if(!word){
                return;
            }
            return word.toUpperCase();
        },

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		}

	};

});