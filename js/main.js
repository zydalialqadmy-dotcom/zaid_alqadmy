$(document).ready(function() {
    // تبديل بين نموذج الدخول ونموذج التسجيل
    $('#showRegister').click(function(e) {
        e.preventDefault();
        $('#loginForm').hide();
        $('#registerForm').show();
        $('#authModalLabel').text('إنشاء حساب');
    });
    $('#showLogin').click(function(e) {
        e.preventDefault();
        $('#registerForm').hide();
        $('#loginForm').show();
        $('#authModalLabel').text('تسجيل الدخول');
    });

    // تحقق من صحة نموذج التسجيل
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        let name = $('#registerName').val().trim();
        let email = $('#registerEmail').val().trim();
        let password = $('#registerPassword').val();
        let confirm = $('#registerConfirm').val();
        let valid = true;
        let msg = '';
        if (name.length < 3) {
            valid = false;
            msg = 'الاسم الكامل يجب أن يكون 3 أحرف على الأقل.';
        } else if (!validateEmail(email)) {
            valid = false;
            msg = 'يرجى إدخال بريد إلكتروني صحيح.';
        } else if (password.length < 6) {
            valid = false;
            msg = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.';
        } else if (password !== confirm) {
            valid = false;
            msg = 'كلمة المرور غير متطابقة.';
        }
        if (!valid) {
            showToast(msg, 'danger');
            return;
        }
        // حفظ بيانات المستخدم (محلياً فقط)
        localStorage.setItem('user', JSON.stringify({name, email}));
        showToast('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.', 'success');
        $('#registerForm').hide();
        $('#loginForm').show();
        $('#authModalLabel').text('تسجيل الدخول');
    });

    // تحقق من صحة نموذج الدخول
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        let email = $('#loginEmail').val().trim();
        let password = $('#loginPassword').val();
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        if ((email === user.email || email === user.name) && password.length >= 6) {
            showToast('تم تسجيل الدخول بنجاح!', 'success');
            $('#authModal').modal('hide');
            setTimeout(function() {
                $('.container h2').text('مرحباً ' + user.name + '! أنت الآن مسجل الدخول.');
                $('#loginBtn').hide();
            }, 500);
        } else {
            showToast('بيانات الدخول غير صحيحة.', 'danger');
        }
    });

    // دالة التحقق من البريد الإلكتروني
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }

    // دالة عرض Toast
    function showToast(message, type) {
        let toast = $(
            `<div class="toast align-items-center text-bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true" style="position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:9999;">
                <div class="d-flex">
                    <div class="toast-body">${message}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="إغلاق"></button>
                </div>
            </div>`
        );
        $('body').append(toast);
        toast.toast({delay: 3000});
        toast.toast('show');
        toast.on('hidden.bs.toast', function () {
            toast.remove();
        });
    }
});
