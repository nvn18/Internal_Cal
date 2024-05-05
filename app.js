let subjectMarks = [];

function changeSubjects() {
  var branchSelect = document.getElementById('branch');
  var subjectSelect = document.getElementById('subject');
  var SelectedYear  = document.getElementById('year');
  subjectSelect.innerHTML = '';

  if (branchSelect.value === 'CSE') {
    if(SelectedYear.value === 'sem1') {
    addOption(subjectSelect, '111-M1');
    addOption(subjectSelect, '112-PHYSICS');
    addOption(subjectSelect, '113-BEE');
    addOption(subjectSelect, '114-PPS');
    addOption(subjectSelect, 'MC1-COI');
    }
    else if (SelectedYear.value === 'sem2') {
    addOption(subjectSelect, '121-M2');
    addOption(subjectSelect, '122-CHEMISTRY');
    addOption(subjectSelect, '123-DE');
    addOption(subjectSelect, '124-ENGLISH');
    addOption(subjectSelect, '125-PYTHON');
    addOption(subjectSelect, 'MC2-ES');
    }
    else if (SelectedYear.value === 'sem3') {
    addOption(subjectSelect, '211-PS');
    addOption(subjectSelect, '212-DMS');
    addOption(subjectSelect, '213-CO');
    addOption(subjectSelect, '214-DS');
    addOption(subjectSelect, '215-OOPS');
    addOption(subjectSelect, 'MC3-DTPI');
    }
    else if (SelectedYear.value === 'sem4') {
      addOption(subjectSelect, '221-CS');
      addOption(subjectSelect, '222-DBMS');
      addOption(subjectSelect, '223-OS');
      addOption(subjectSelect, '224-SE');
      addOption(subjectSelect, '225-WT');
      addOption(subjectSelect, 'MC4-E & H VALUES');
    }
    else if (SelectedYear.value === 'sem5') {
        addOption(subjectSelect, '311-AFL');
        addOption(subjectSelect, '312-CN');
        addOption(subjectSelect, '313-DAA');
        addOption(subjectSelect, '314-IR/DE');
        addOption(subjectSelect, '315-OR/NCC');
    }
    else if (SelectedYear.value === 'sem6') {
      addOption(subjectSelect, '321-AI');
      addOption(subjectSelect, '322-CNS');
      addOption(subjectSelect, '323-ML');
      addOption(subjectSelect, '324-CC/CD');
      addOption(subjectSelect, '325-FSD/NCC');
      }

    
  } else if (branchSelect.value === 'MECH') {
    if(SelectedYear.value === 'sem1') {
      addOption(subjectSelect, '111-M1');
      addOption(subjectSelect, '112-CHEMISTRY');
      addOption(subjectSelect, '113-ENGLISH');
      addOption(subjectSelect, '114-PPS');
      addOption(subjectSelect, 'MC1-ES');
      }
      else if (SelectedYear.value === 'sem2') {
      addOption(subjectSelect, '121-M2');
      addOption(subjectSelect, '122-PHYSICS');
      addOption(subjectSelect, '123-BEE');
      addOption(subjectSelect, '124-MECHANICS');
      addOption(subjectSelect, '125-ENG.GRAPHICS');
      addOption(subjectSelect, 'MC2-COI');
      }
      else if (SelectedYear.value === 'sem3') {
      addOption(subjectSelect, '211-OM');
      addOption(subjectSelect, '212-MS & M');
      addOption(subjectSelect, '213-MANUFACTURNING PROCESS');
      addOption(subjectSelect, '214-BASIC THERMODYNAMICS');
      addOption(subjectSelect, '215-TOM & M');
      addOption(subjectSelect, 'MC3-E & H VALUES');
      }
      else if (SelectedYear.value === 'sem4') {
        addOption(subjectSelect, '221-M3');
        addOption(subjectSelect, '222-APPLIED THERMODYNAMICS');
        addOption(subjectSelect, '223-STRENGTH OF MATERIALS');
        addOption(subjectSelect, '224-MANUFACTURNING TECHNOLOGY');
        addOption(subjectSelect, '225- FLUID MECHANICS');
        addOption(subjectSelect, 'MC4-DTPI');
      }
      else if (SelectedYear.value === 'sem5') {
          addOption(subjectSelect, '311-DESIGN OF MACHINE ELEMENTS');
          addOption(subjectSelect, '312-METROLOGY & MEASURMENTS');
          addOption(subjectSelect, '313-DYNAMICS & VIBRATIONS');
          addOption(subjectSelect, '314-PE-I');
          addOption(subjectSelect, '315-OE-I');
      }
      else if (SelectedYear.value === 'sem6') {
        addOption(subjectSelect, '321-TRANSMISSION ELEMENTS');
        addOption(subjectSelect, '322-OR');
        addOption(subjectSelect, '323-HT');
        addOption(subjectSelect, '324-PE-II');
        addOption(subjectSelect, '325-OE-II');
        }
    // Add more subjects for MECH
  } else if (branchSelect.value === 'CSM') {
    if(SelectedYear.value === 'sem1') {
      addOption(subjectSelect, '111-M1');
      addOption(subjectSelect, '112-CHEMISTRY');
      addOption(subjectSelect, '113-FCS');
      addOption(subjectSelect, '114-PPS');
      addOption(subjectSelect, 'MC1-ES');
      }
      else if (SelectedYear.value === 'sem2') {
      addOption(subjectSelect, '121-M2');
      addOption(subjectSelect, '122-PHYSICS');
      addOption(subjectSelect, '123-DE');
      addOption(subjectSelect, '124-DS');
      addOption(subjectSelect, '125-PYTHON');
      addOption(subjectSelect, 'MC2-COI');
      }
      else if (SelectedYear.value === 'sem3') {
      addOption(subjectSelect, '211-PS');
      addOption(subjectSelect, '212-DMS');
      addOption(subjectSelect, '213-CO');
      addOption(subjectSelect, '214-DBMS');
      addOption(subjectSelect, '215-OOPS');
      addOption(subjectSelect, 'MC3-DTPI');
      }
      else if (SelectedYear.value === 'sem4') {
        addOption(subjectSelect, '221-CS');
        addOption(subjectSelect, '222-AI');
        addOption(subjectSelect, '223-OS');
        addOption(subjectSelect, '224-SE');
        addOption(subjectSelect, '225-DAA');
        addOption(subjectSelect, 'MC4-E & H VALUES');
      }
      else if (SelectedYear.value === 'sem5') {
        addOption(subjectSelect, '311-AFL');
        addOption(subjectSelect, '312-CN');
        addOption(subjectSelect, '313-DV');
        addOption(subjectSelect, '314-PE-I');
        addOption(subjectSelect, '315-OE-I');
      }
      else if (SelectedYear.value === 'sem6') {
        addOption(subjectSelect, '321-NLP');
        addOption(subjectSelect, '322-ML');
        addOption(subjectSelect, '323-SC');
        addOption(subjectSelect, '324-PE-II');
        addOption(subjectSelect, '325-OE-II');
        }
    
    
  } else if (branchSelect.value === 'CSD' || branchSelect.value === 'CSBS'|| branchSelect.value === 'CSO'|| branchSelect.value === 'IT'|| branchSelect.value === 'EEE'|| branchSelect.value === 'ECE'|| branchSelect.value === 'CIVIL'|| branchSelect.value === 'CHEMICAL'){
    addOption(subjectSelect, '111');
      addOption(subjectSelect, '112');
      addOption(subjectSelect, '113');
      addOption(subjectSelect, '114');
      addOption(subjectSelect, 'MC1');
      }
      else if (SelectedYear.value === 'sem2') {
      addOption(subjectSelect, '121');
      addOption(subjectSelect, '122');
      addOption(subjectSelect, '123');
      addOption(subjectSelect, '124');
      addOption(subjectSelect, '125');
      addOption(subjectSelect, 'MC2');
      }
      else if (SelectedYear.value === 'sem3') {
      addOption(subjectSelect, '211');
      addOption(subjectSelect, '212');
      addOption(subjectSelect, '213');
      addOption(subjectSelect, '214');
      addOption(subjectSelect, '215');
      addOption(subjectSelect, 'MC3');
      }
      else if (SelectedYear.value === 'sem4') {
        addOption(subjectSelect, '221');
        addOption(subjectSelect, '222');
        addOption(subjectSelect, '223');
        addOption(subjectSelect, '224');
        addOption(subjectSelect, '225');
        addOption(subjectSelect, 'MC4');
      }
      else if (SelectedYear.value === 'sem5') {
        addOption(subjectSelect, '311');
        addOption(subjectSelect, '312');
        addOption(subjectSelect, '313');
        addOption(subjectSelect, '314-PE-I');
        addOption(subjectSelect, '315-OE-I');
      }
      else if (SelectedYear.value === 'sem6') {
        addOption(subjectSelect, '321');
        addOption(subjectSelect, '322');
        addOption(subjectSelect, '323');
        addOption(subjectSelect, '324-PE-II');
        addOption(subjectSelect, '325-OE-II');
        }
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
