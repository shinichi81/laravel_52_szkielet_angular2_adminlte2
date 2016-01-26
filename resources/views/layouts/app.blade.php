<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Agrosza - Hurtownia oraz sklep detaliczny</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="{{asset('assets/vendor/adminlte/bootstrap/css/bootstrap.min.css')}}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('assets/vendor/font-awesome/css/font-awesome.min.css')}}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{asset('assets/vendor/ionicons/css/ionicons.min.css')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('assets/vendor/adminlte/css/AdminLTE.min.css')}}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{asset('assets/vendor/adminlte/css/skins/_all-skins.min.css')}}">
    <!-- load libraries angular 2 -->
    <script src="{{asset('assets/vendor/angular/es6-shim/es6-shim.min.js')}}"></script>
    <script src="{{asset('assets/vendor/angular/systemjs/dist/system-polyfills.js')}}"></script>
     <script src="{{asset('assets/vendor/angular/angular2/bundles/angular2-polyfills.js')}}"></script>
     <script src="{{asset('assets/vendor/angular/systemjs/dist/system.src.js')}}"></script>
     <script src="{{asset('assets/vendor/angular/rxjs/bundles/Rx.js')}}"></script>
     <script src="{{asset('assets/vendor/angular/angular2/bundles/angular2.dev.js')}}"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="{{asset('assets/html5shiv/html5shiv.min.js')}}"></script>
        <script src="{{asset('assets/respond/respond.min.js')}}"></script>
    <![endif]-->
    <script>
        System.config({
            "baseURL": "{{url('/')}}/assets/vendor/angular/",
            "defaultJSExtensions": true,
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
        System.import('{{url('/')}}/assets/js/typescript/boot').then(null, console.error.bind(console));
    </script>
</head>
<body class="hold-transition skin-blue sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">
        <header class="main-header">
            <!-- Logo -->
            <a href="{{url('/')}}" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>A</b>GR</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>Nepras</b>.PL</span>
            </a>
            @include('layouts.navbar')
        </header>
        @include('layouts.sidebar')
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @yield('content')
        </div>
        <!-- /.content-wrapper -->
        @include('layouts.footer')
        <!-- Control Sidebar -->
        @include('layouts.asidebar')
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- jQuery 2.1.4 -->
    <script src="{{asset('assets/vendor/adminlte/plugins/jQuery/jQuery-2.1.4.min.js')}}"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="{{asset('assets/vendor/adminlte/bootstrap/js/bootstrap.min.js')}}"></script>
    <!-- SlimScroll -->
    <script src="{{asset('assets/vendor/adminlte/plugins/slimScroll/jquery.slimscroll.min.js')}}"></script>
    <!-- FastClick -->
    <script src="{{asset('assets/vendor/adminlte/plugins/fastclick/fastclick.js')}}"></script>
    <!-- AdminLTE App -->
    <script src="{{asset('assets/vendor/adminlte/js/app.min.js')}}"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="{{asset('assets/vendor/adminlte/js/demo.js')}}"></script>
</body>
</html>
