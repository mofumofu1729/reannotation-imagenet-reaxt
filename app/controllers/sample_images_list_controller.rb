class SampleImagesListController < ApplicationController
  def index
    image_cluster = ImageCluster.find_by(annotated: false)

    @image_cluster = ImageCluster.includes(:images).find(image_cluster.id)
  end
end
