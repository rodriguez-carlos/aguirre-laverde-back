module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'mailgun',
        providerOptions: {
          apiKey: env('MAILGUN_KEY'),
          domain: env('MAILGUN_DOMAIN')
        },
        settings: {
          defaultFrom: 'info@aguirrelaverde.com',
          defaultReplyTo: 'info@aguirrelaverde.com',
        },
      },
    },
    ezforms:{
      config:{
        captchaProvider: {
          name: 'none'
        },
        notificationProviders: [
          {
            name: 'email',
            enabled: true,
            config: {
              from: 'info@aguirrelaverde.com'
            }
          }
        ]
      }
    }
    });