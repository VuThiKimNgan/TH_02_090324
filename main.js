// BÀI 1
<script>
      function giaiPhuongTrinh() {
        var a = parseFloat(document.ip1("a").value);
        var b = parseFloat(document.ip2("b").value);

        if (a === 0) {
          if (b === 0) {
            document.result("ketqua").innerText =
              "Phương trình vô số nghiệm";
          } else {
            document.result("ketqua").innerText =
              "Phương trình vô nghiệm";
          }
        } else {
          var x = -b / a;
          document.result("ketqua").innerText =
            "Nghiệm của phương trình là: x = " + x;
        }
      }
   
    // BÀI 2
    document
        .getElementById("contributionForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          var fullName = document.getElementById("fullName").value;
          var phoneNumber = document.getElementById("phoneNumber").value;
          var email = document.getElementById("email").value;
          var feedback = document.getElementById("feedback").value;

          var contributionMessage =
            "Họ và Tên: " +
            fullName +
            "\n" +
            "Số Điện Thoại: " +
            phoneNumber +
            "\n" +
            "Email: " +
            email +
            "\n" +
            "Ý Kiến Đóng Góp: " +
            feedback;

          console.alert(contributionMessage);

          // Clear form fields after submission
          document.getElementById("contributionForm").reset();
        });

// BÀI 4
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
  
    var bmi = calculateBMI(weight, height);
    displayBMIResult(bmi);
  });
  
  function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
  
  function displayBMIResult(bmi) {
    var resultText;
    if (bmi < 18.5) {
      resultText = "Gầy (BMI < 18.5)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText = "Bình thường (18.5 ≤ BMI < 24.9)";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      resultText = "Hơi béo (24.9 ≤ BMI < 29.9)";
    } else {
      resultText = "Béo phì (BMI ≥ 30)";
    }
  
    document.getElementById("bmiResult").innerHTML = "Chỉ số BMI của bạn là: " + bmi + "<br>" + resultText;
  }
    </script>
