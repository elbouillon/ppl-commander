# Configure your routes here
# See: http://hanamirb.org/guides/routing/overview/
#
# Example:
# get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }
get '/test', to: 'test#loutre'
get '/', to: 'home#index'
get '/view/message/122', to: 'home#view_message'
