<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zaid Library</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/style.css">
  <!-- WowSlider CSS -->
  <link rel="stylesheet" type="text/css" href="https://wowslider.com/sliders/demo-93/engine1/style.css" />
</head>
<body>
  <header class="x bg-primary text-white p-3">
    <div class="container">
  <nav class="y navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand z" href="index.html"><i class="fa fa-book"></i> Zaid Library</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link w active" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link w" href="html/books.html">Books</a></li>
            <li class="nav-item"><a class="nav-link w" href="html/about.html">About</a></li>
            <li class="nav-item"><a class="nav-link w" href="html/services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link w" href="html/contact.html">Contact</a></li>
          </ul>
          <button id="loginBtn" class="btn btn-light ms-3" data-bs-toggle="modal" data-bs-target="#authModal">Login / Register</button>
        </div>
      </nav>
    </div>
  </header>
  <!-- WowSlider Image Carousel -->
  <!-- Bootstrap Carousel for 4 images -->
  <div id="mainCarousel" class="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
  <img src="images/pexels-arturoaez225-15857167.jpg" class="d-block w-100" alt="Image 1">
      </div>
      <div class="carousel-item">
  <img src="images/pexels-pixabay-301920.jpg" class="d-block w-100" alt="Image 2">
      </div>
      <div class="carousel-item">
  <img src="images/pexels-tima-miroshnichenko-5199810.jpg" class="d-block w-100" alt="Image 3">
      </div>
      <div class="carousel-item">
  <img src="images/صورة واتساب بتاريخ 1447-04-05 في 22.54.08_935b38d6.jpg" class="d-block w-100" alt="Image 4">
      </div>
    </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>

  <main class="q container mt-5">
    <section class="mb-5">
      <h2>Welcome to Zaid Library</h2>
      <p>Zaid Library offers the best books and educational resources for all ages. Browse the sections, enjoy our services, and contact us for any inquiries.</p>
    </section>
    <section class="row text-center">
      <div class="col-md-3 mb-4">
        <i class="fa fa-book fa-2x mb-2 text-primary"></i>
        <h4>Books</h4>
        <p>A wide variety of books in all fields.</p>
  <a href="html/books.html" class="btn btn-outline-primary btn-sm">Browse Books</a>
      </div>
      <div class="col-md-3 mb-4">
        <i class="fa fa-info-circle fa-2x mb-2 text-success"></i>
        <h4>About</h4>
        <p>Learn about the goals and mission of Zaid Library.</p>
  <a href="html/about.html" class="btn btn-outline-success btn-sm">More</a>
      </div>
      <div class="col-md-3 mb-4">
        <i class="fa fa-cogs fa-2x mb-2 text-warning"></i>
        <h4>Services</h4>
        <p>Book borrowing, reading, and events services.</p>
  <a href="html/services.html" class="btn btn-outline-warning btn-sm">Our Services</a>
      </div>
      <div class="col-md-3 mb-4">
        <i class="fa fa-envelope fa-2x mb-2 text-danger"></i>
        <h4>Contact</h4>
        <p>For any inquiry or suggestion, contact us directly.</p>
  <a href="html/contact.html" class="btn btn-outline-danger btn-sm">Contact Us</a>
      </div>
    </section>
  </main>
  <footer class="t bg-light text-center text-muted py-3 mt-5">
    &copy; 2025 Zaid Library. جميع الحقوق محفوظة.
  </footer>
    <!-- Modal -->
    <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="authModalLabel">Login</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="إغلاق"></button>
          </div>
          <div class="modal-body">
            <!-- Login Form -->
            <form id="loginForm">
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Username or Email</label>
                <input type="text" class="form-control" id="loginEmail" required>
              </div>
              <div class="mb-3">
                <label for="loginPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="loginPassword" required>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary">Login</button>
                <a href="#" id="showRegister">Create a new account</a>
              </div>
            </form>
            <!-- Register Form (hidden by default) -->
            <form id="registerForm" style="display:none;">
              <div class="mb-3">
                <label for="registerName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="registerName" required>
              </div>
              <div class="mb-3">
                <label for="registerEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="registerEmail" required>
              </div>
              <div class="mb-3">
                <label for="registerPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="registerPassword" required>
              </div>
              <div class="mb-3">
                <label for="registerConfirm" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="registerConfirm" required>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-success">Register</button>
                <a href="#" id="showLogin">Already have an account? Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
  <script src="js/main.js"></script>
</body>
</html>
