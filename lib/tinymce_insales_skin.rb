module TinymceInsalesSkin
  module Rails
    class Engine < ::Rails::Engine
      initializer 'tinymce_insales_skin.assets.precompile' do |app|
        Dir.glob(root.join('vendor', 'assets', 'stylesheets', "**/*.css").to_s).each do |file|
          app.config.assets.precompile << file
        end
      end
    end
  end
end
