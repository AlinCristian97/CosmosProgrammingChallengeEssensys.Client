import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string): void {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';

    this.snackBar.open(message, 'Close', {
      ...config,
      duration: 3000,
    });
  }
}
