import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,  // ✅ Mark as standalone
  imports: [FormsModule, CommonModule],  // ✅ Import FormsModule for ngModel
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User = { id: '', name: '', email: '' }; // ✅ Ensure properties are initialized

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService
  ) {}

  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
