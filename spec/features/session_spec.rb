require 'rails_helper'

describe 'the signin process', type: :feature do
  scenario 'signs me in', js: true do
    visit 'http://localhost:3000/login'
    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    click_button 'Enter'

    expect(page).to have_content 'Add measurement'
  end
end

describe 'the signup process', type: :feature do
  scenario 'signs me up', js: true do
    visit '/sign-up'
    fill_in 'name', with: 'User2'
    fill_in 'email', with: 'user2@example.com'
    fill_in 'password', with: 'password'
    fill_in 'photo', with: 'photoprofile'
    click_button 'Enter'
    expect(page).to have_content 'Enter your credentials'
  end

  scenario 'Validates Sign up fields', js: true do
    visit '/sign-up'
    fill_in 'email', with: 'user2@example.com'
    fill_in 'password', with: 'password'
    fill_in 'photo', with: 'photoprofile'
    click_button 'Enter'
    expect(page).to have_content "Name can't be blank"
  end

  it 'redirects to login page when a credential is not provided', js: true do
    visit '/measures'
    expect(page).to have_content 'Enter your credentials'
  end

  it 'add measurements after login', js: true do
    visit 'http://localhost:3000/login'
    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    click_button 'Enter'

    expect(page).to have_content 'Add measurement'
  end
end
