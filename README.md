Uses ReactRouter to add a route group to `/admin` to browse data collected from meteor-imsi-catcher-catcher.

## Usage
````
meteor add marvin:meteor-imsi-catcher-catcher-admin
````

Add `CATCHER_ADMIN_KEY` to your `settings.json`. It should be set to a random long string like:

````
{
  CATCHER_ADMIN_KEY: "REALLY_LONG_STRING_OH_MY"
}
````

Start your server with `meteor --settings settings.json`.

Open https://example.com/admin?secret=CATCHER_ADMIN_KEY and explore the data.
