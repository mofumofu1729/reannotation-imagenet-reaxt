require 'test_helper'

class SampleImagesListControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sample_images_list_index_url
    assert_response :success
  end

end
