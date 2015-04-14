module.exports = (function () {
  'use strict';
  // body...
  return {
            db: { 
                  development: {
                    'client': 'pg',
                    'connection': {
                      'host': 'localhost',
                      'user': 'tams',
                      'database': 'users'
                    }
                  },

                  test: {
                    'client': 'pg',
                    'connection': {
                      'host': 'localhost',
                      'user': 'tams',
                      'database': 'users-test'
                    }
                  }

                },

          };
})();