# Ember-loading-route

Set common the loading route for different route levels

#### Reason

For example you have 3 level of routes:
1. user (first level)
2. user.settings (second level)
3. user.settings.index (third level)

And on 3 level you have few pages:
* user.settings.index
* user.settings.locations
* user.settings.notifications

Ember automatically creates the loading routes for you:
* user.settings.index_loading
* user.settings.locations_loading
* user.settings.notifications_loading

But for these route you should create templates, otherwise 
you will get white screen in loading state. Obviously you can 
copy paste, but then you get many of the same files, instead of 
the one template .

#### Installation

* `ember install ember-loading-route` in your project dir

#### Usage

First, create common route for loading state:

* `ember g route user/loading`

Put in your app/config/environment.js the following config:

```javascript
ENV['ember-loading-route'] = {
  enabled: true,
  commonRoutes: [
    {
      routeLevel: 3,
      templateName: 'user/loading'
    }
  ]
};
```

Now, this template will be work for entire application:
* user.settings.locations
* admin.dashboard.stats
* guest.home.index
* ...


#### Usage with conditions

What if i want use different templates for different roles?
* For admin role, i want use 'admin/circle-loading'
* For user role, i want use 'square-loading'
* Or without role, for some page


```javascript
ENV['ember-loading-route'] = {
  enabled: true,
  commonRoutes: [
    {
      routeLevel: 3,
      templateName: 'admin/circle-loading',
      condition: 'admin'
    },
    {
      routeLevel: 3,
      templateName: 'square-loading',
      condition: 'user'
    },
    {
      templateName: 'square-loading',
      condition: 'about.index'
    }
  ]
};
```

