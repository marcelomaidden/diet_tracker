require 'rails_helper'
describe 'Dashboard', type: :feature do
  it 'Visits dashboard page', js: true do
    visit 'http://localhost:3000/login'
    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    click_button 'Enter'
    click_on 'Dashboard'


    expect(page).to have_content 'Added today'
  end
end
