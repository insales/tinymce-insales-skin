module TinymceInsalesSkin
  module Rails
    class Engine < ::Rails::Engine
      initializer 'tinymce_insales_skin.assets.precompile' do |app|
        %w(stylesheets fonts images).each do |sub|
          app.config.assets.paths << root.join('vendor', 'assets', sub).to_s
        end
        #app.config.assets.precompile << %r(bootstrap/glyphicons-halflings-regular\.(?:eot|svg|ttf|woff)$)
      end
    end
  end
end
