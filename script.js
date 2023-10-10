<script>
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust the offset as needed
          behavior: 'smooth'
        });
      }
    });
  });

  // Function to handle the resume download
  function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = 'images/resume.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;

    // Set the download attribute and the file name
    link.setAttribute('download', 'Marlon_Carbonilla_Resume.pdf');

    // Trigger the click event to start the download
    link.click();
  }

  // Add an event listener to the button to call the downloadResume function on click
  document.getElementById('downloadResumeButton').addEventListener('click', downloadResume);
</script>


  
</script>
