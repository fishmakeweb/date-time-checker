Feature("Date Time Checker Feature");

Scenario("Check date successfully with provided inputs", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the valid date message
  I.waitForText("Valid Date", 2); // Wait and check for the valid date message
  I.see("Valid Date"); // Verify that the valid date message is visible after submission
});

Scenario("Clear date fields", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Clear the form
  I.click({ css: 'button[type="button"]' });

  // Verification step to confirm the fields are cleared
  I.seeInField({ id: "year" }, "");
  I.seeInField({ id: "month" }, "");
  I.seeInField({ id: "day" }, "");
});

Scenario("Check out-of-range date (day)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and out-of-range day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "32");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Day is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Day is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check out-of-range date (month)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year and out-of-range month fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "13");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Month is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Month is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check out-of-range date (year)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the out-of-range year fields
  I.fillField({ id: "year" }, "999");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Year is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Year is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check invalid date format (year)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid year format
  I.fillField({ id: "year" }, "abcd");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Year is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Year is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

Scenario("Check invalid date format (month)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid month format
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "abc");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Month is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Month is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

Scenario("Check invalid date format (day)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid day format
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "abc");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Day is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Day is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

// Failing Test Cases

Scenario("Fail: Check valid date but expect invalid message", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Intentionally wait for incorrect message
  I.waitForText("Invalid Date", 2); // This should fail because the date is valid
  I.see("Invalid Date"); // This should fail because the date is valid
});

Scenario("Fail: Check invalid date but expect valid message", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid year format
  I.fillField({ id: "year" }, "abcd");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Intentionally wait for correct message
  I.waitForText("Valid Date", 2); // This should fail because the year is in an invalid format
  I.see("Valid Date"); // This should fail because the year is in an invalid format

  //
});
// Existing successful and edge case tests...

// Failing Test Cases

// Test 1: Missing Feature - Check for missing element
Scenario("Fail: Missing feature - Check for Help button", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Attempt to find a "Help" button which does not exist
  I.waitForElement({ css: "button.help-button" }, 2); // This should fail because the Help button does not exist
  I.seeElement("button.help-button"); // This should fail because the Help button does not exist
});

// Test 2: Business Logic - Incorrect leap year calculation
Scenario(
  "Fail: Business logic - Incorrect leap year calculation",
  async ({ I }) => {
    I.amOnPage("/"); // Navigate to the main page of your application

    // Fill in the fields for a non-leap year date, but the system incorrectly marks it as valid
    I.fillField({ id: "year" }, "1900"); // 1900 is not a leap year
    I.fillField({ id: "month" }, "2");
    I.fillField({ id: "day" }, "29");

    // Submit the form
    I.click({ css: 'button[type="submit"]' });

    // Expect to see an error message, but the system incorrectly validates the date
    I.waitForText("Invalid Date", 2); // This should fail if the date is incorrectly marked as valid
    I.see("Invalid Date"); // This should fail if the date is incorrectly marked as valid
  }
);

// Test 3: Coding Logic - Incorrectly handled input type
Scenario("Fail: Coding logic - Input field accepts letters", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year field with letters, which should not be allowed
  I.fillField({ id: "year" }, "abcd");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // The form should show an error for invalid input format, but incorrectly accepts it
  I.waitForText("Input for Year is in incorrect format!", 2); // This should fail if the input is incorrectly accepted
  I.see("Input for Year is in incorrect format!"); // This should fail if the input is incorrectly accepted
});

// Test 4: User Interface - Incorrect layout alignment
Scenario("Fail: User interface - Label and input alignment", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Check for alignment issues in the form fields
  I.seeElement(".form-group label"); // Labels should be aligned with inputs
  I.seeElement(".form-group input"); // Inputs should be aligned with labels

  // Intentionally fail by checking incorrect alignment CSS class
  I.waitForElement({ css: ".incorrect-alignment" }, 2); // This should fail because the class does not exist
  I.seeElement(".incorrect-alignment"); // This should fail because the class does not exist
});

// Test 2: Feature Missing - Clear button functionality
Scenario(
  "Fail: Missing feature - Clear button does not clear fields",
  async ({ I }) => {
    I.amOnPage("/"); // Navigate to the main page of your application

    // Fill in the year, month, and day fields
    I.fillField({ id: "year" }, "2024");
    I.fillField({ id: "month" }, "6");
    I.fillField({ id: "day" }, "11");

    // Click the clear button
    I.click({ css: 'button[type="button"]' });

    // Intentionally fail by checking that fields are not cleared
    I.seeInField({ id: "year" }, "2024"); // This should fail because the fields should be cleared
    I.seeInField({ id: "month" }, "6"); // This should fail because the fields should be cleared
    I.seeInField({ id: "day" }, "11"); // This should fail because the fields should be cleared
  }
);