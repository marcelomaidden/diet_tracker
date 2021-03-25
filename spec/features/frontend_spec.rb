require 'rails_helper'

describe 'shows the root_path', type: :feature do
  scenario 'describes the application', js: true do
    visit '/'
    expect(page).to have_content 'Diet tracker'
  end
end
