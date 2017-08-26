<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel Admin React App</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
<script type="text/javascript">
  window.Laravel = {};
  window.Laravel.csrfToken = 'csrf_token_no_avaliable_by_default_on_lumen';
</script>
<style>
            html, body {
                background-color: #171714;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    AdminRoot React App
                </div>
                <div id="adminroot">
                </div>
            </div>
        </div>
        <script type="text/javascript" src="{{mix('/js/manifest.js')}}"></script>
        <script type="text/javascript" src="{{mix('/js/vendor.js')}}"></script>
        <script type="text/javascript" src="{{mix('/js/app-admin.js')}}"></script>
    </body>
</html>
