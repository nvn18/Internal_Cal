let subjectMarks = [];

function changeSubjects() {
  var branchSelect = document.getElementById('branch');
  var subjectSelect = document.getElementById('subject');
  subjectSelect.innerHTML = '';

  if (branchSelect.value === 'CSE') {
    addOption(subjectSelect, '311-AFL');
    addOption(subjectSelect, '312-CN');
    addOption(subjectSelect, '313-DAA');
    addOption(subjectSelect, '314-IR');
    addOption(subjectSelect, '315-OR');
    // Add more subjects for CSE
  } else if (branchSelect.value === 'MECH') {
    addOption(subjectSelect, '311-DME');
    addOption(subjectSelect, '312-MAM');
    addOption(subjectSelect, '313-MDAV');
    addOption(subjectSelect, '314-ICGT');
    addOption(subjectSelect, '315-AI');
    // Add more subjects for MECH
  } else if (branchSelect.value === 'CSM') {
    addOption(subjectSelect, '311-AFL');
    addOption(subjectSelect, '312-CN');
    addOption(subjectSelect, '313-DV');
    addOption(subjectSelect, '314-CC');
    addOption(subjectSelect, '315-IOT');
    // Add more subjects for MECH
  }
  // Add conditions for other branches
}

function addOption(select, value) {
  var option = document.createElement('option');
  option.value = value;
  option.text = value;
  select.add(option);
}

function recordSubjectMarks() {
  let subject = document.getElementById('subject').value;
  let m1 = parseFloat(document.getElementById('m1').value) || 0;
  let a1 = parseFloat(document.getElementById('a1').value) || 0;
  let q1 = parseFloat(document.getElementById('q1').value) || 0;
  let m2 = parseFloat(document.getElementById('m2').value) || 0;
  let a2 = parseFloat(document.getElementById('a2').value) || 0;
  let q2 = parseFloat(document.getElementById('q2').value) || 0;
  let att = parseFloat(document.getElementById('att').value) || 0;

  subjectMarks.push({
    subject: subject,
    m1: m1,
    a1: a1,
    q1: q1,
    m2: m2,
    a2: a2,
    q2: q2,
    att: att
  });

  clearInputs();
  
  if (subjectMarks.length < 5) {
    alert('Enter marks for the next subject.');
  } else {
    alert('All marks recorded. Calculating results...');
    localStorage.setItem('subjectMarks', JSON.stringify(subjectMarks));
    window.location.href = 'results.html';
  }
}

function clearInputs() {
  document.getElementById('m1').value = '';
  document.getElementById('a1').value = '';
  document.getElementById('q1').value = '';
  document.getElementById('m2').value = '';
  document.getElementById('a2').value = '';
  document.getElementById('q2').value = '';
  document.getElementById('att').value = '';
  document.getElementById('result').innerHTML = '';
}
