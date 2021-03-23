Feature: Filtering data in Amazon
	In order to see specific info
	As a user
	I want to filtering data in main page

	Scenario: Filter data in Amazon
		Given user open amazon website
		And user fill filter form with macbook
		And user click on button filter
		Then user can see list data about macbook