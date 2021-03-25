require 'rails_helper'

describe 'Measurements', type: :feature do
  it 'Adds a measurement', js: true do
    visit 'http://localhost:3000/login'

    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    click_button 'Enter'

    click_on 'Add measure'
    fill_in 'Carbohydrates', with: '100'
    fill_in 'Fats', with: '30'
    fill_in 'Proteins', with: '200'
    click_button 'Enter'
    expect(page).to have_content 'Measurements added'
  end
end
