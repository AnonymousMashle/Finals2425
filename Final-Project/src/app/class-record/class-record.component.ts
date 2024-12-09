import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const names = [
  'Samdao Reymart','CHRISTOPHER ABON', 'PAUL RAYNEE ANDRES', 'PAUL RAYNEE ANDRES', 'AVERIE GASPAR',
  'JESSIE JAY JAVIER', 'JESSIE JAY JAVIER', 'JERICKO MARQUEZ', 'MELCHIZEDEK MARTINEZ',
  'JEROME ORDANZA', 'FIONA MARIE PASSI', 'PAUL JUSTIN MERCADO', 'WIFRAIM NEIL SAN MIGUEL','MARK FROILAN CASTRO','RAPHAEL GARCIA','ZCHIAVONI SID TAD-AWAN','IAN JULIUS VISPERAS','PRINZ JAN LEE PAULO'
];
const activityTypes = [
  'AppDev-Final-Exam', 'Router-Outlet', ' Creating Angular Components', 'Laboratory Activity', 'Router-Example', 'Angular-Routing', 'Named Routers', 'Angular-Framework','Nodes.js','CLI'
];
const id = [
  "20191912", "20182249", "20202357", "20181739", "20221748", "20192154", "20202319", "20181837", "20190632", "20218070", "20238248", "20193850", "20232515", "20196001", "20198930", "20200635", "20170661", "20217387", "20238485", "20206304", "20205337", "20224066", "20229074", "20212689", "20200134", "20178118", "20225353", "20213283", "20206640", "20237218", "20204051", "20211000", "20194084", "20203131", "20209715", "20210317", "20213501", "20213069", "20192932", "20209278", "20205556", "20221340", "20203533", "20216327", "20176978", "20200841", "20220936", "20232399", "20193678", "20221861", "20196985", "20217333", "20211406", "20220303", "20217217", "20234778", "20233837", "20235819"
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}



@Component({
  selector: 'app-class-record',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css'],
})





export class ClassRecordComponent {

  studentRecords = Array.from({ length: 50 }, (_, i) => ({
    id: getRandomItem(id),
    name: getRandomItem(names),
    activityType: getRandomItem(activityTypes),
    email: ``,
    phoneNumber: ``,
    address: ``,
  }));



  

  currentPage = 1;
  itemsPerPage = 10;
  totalPages = Math.ceil(this.studentRecords.length / this.itemsPerPage);

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.studentRecords.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }


  showModal = false;
  selectedStudent: any = null;

  viewStudent(student: any) {
    this.selectedStudent = student;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


  showEditModal = false;
  editStudent: any = {};

  openEditModal(student: any) {
    this.editStudent = { ...student }; 
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  saveEdits() {
    const index = this.studentRecords.findIndex(
      (student) => student.id === this.editStudent.id
    );
    if (index !== -1) {
      this.studentRecords[index] = { ...this.editStudent }; // Update the entire record
    }
    this.showEditModal = false; // Close the edit modal
  }
  
}
