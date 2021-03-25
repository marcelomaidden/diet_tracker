require 'rails_helper'

describe "shows the root_path", type: :feature do
  scenario "describes the application", :js => true do
    visit '/'
    expect(page).to have_content 'Diet tracker'
  end

  it "redirects to login page when a credentials is not provided", :js => true do
    visit '/measures'
    expect(page).to have_content 'Enter your credentials'
  end
end
