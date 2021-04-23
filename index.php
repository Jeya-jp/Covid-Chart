<html>
  <head>    
    <title>TN Covid Chart</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.0/chart.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/first.js"></script>
    
  </head>
  <?php

    function checkPageVisitor()
    {
        // echo "<script> alert('Hello World') </script>";
        session_start();

        if(isset($_SESSION['covidTracker4']))
        {
            $_SESSION['covidTracker4'] = $_SESSION['covidTracker4']+1;
            class DB extends SQLite3
            {
                function __construct()
                {
                    $this->open('./DB/Visitors.db');
                }
            }
            $db=new DB();
            $count = $_SESSION['covidTracker4'];
            $sql="UPDATE visitorsCount SET view = $count";
            $result=$db->Query($sql);
            echo"views = ".$_SESSION['covidTracker4'];
        }
        else
        {
            $_SESSION['covidTracker4']=1;
            class DB extends SQLite3
            {
                function __construct()
                {
                    $this->open('./DB/Visitors.db');
                }
            }
            $db=new DB();
            $count = 1;
            $sql="INSERT INTO visitorsCount(view) VALUES($count)";
            $result=$db->Query($sql);
            echo"views = ".$_SESSION['covidTracker4'];
        }
    }
    checkPageVisitor();
?>
  <body onload="onloadjs();">
        <div>
            <div class="container">
                <div class="row">
                    <h3 id="text">TAMILNADU COVID CASES</h3>
                <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" id="box1">
                        <h4 class="text-primary">CURRENT ACTIVE CASES</h4>
                    </div>
                    <div class="col-md-4" id="box2">
                        <h4 class="text-danger">INCREASED</H4>
                    </div>
                    <div class="col-md-4" id="box3">
                        <h4 class="text-success">DECREASED</h4>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>