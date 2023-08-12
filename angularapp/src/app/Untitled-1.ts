
<div class="container">
<div class="child">
    <p-table [value]="publisherList" 
            #schoolList
            [(selection)]="selectedCols" 
            dataKey="id" styleClass="p-datatable-customers" 
            [rowHover]="true"
            [rows]="10"
            [rowsPerPageOptions]="[10,25,50]"
            [paginator]="true"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            [globalFilterFields]="['school_name']"
            [loading]="loading"
        >
        
        <ng-template pTemplate="caption">
            <div class="table-header flex align-items-center justify-content-between">
                <div class="box">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <input pInputText type="text" (change)="handleChange(schoolList, $event)" placeholder="Global Search" />
                    </span>
                    <div>
                        <div *ngIf="!selectedCols.length">
                            <h4>0 Selected</h4>
                        </div>

                        <div *ngIf="selectedCols.length" class="content-box">
                            <h4>Selected</h4> 
                            <p> {{selectedCols.length}} schools </p>
                            <p> {{ getCount('campus') }} campus </p>
                            <p> {{ getCount('department') }}  department </p>
                            <p> {{ getCount('batch') }}  batch </p>
                        </div>

                    </div>
                    <p-button icon="pi pi-check" (click)="handleSubmit($event)"></p-button>
                </div>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th style="width: 3rem" id="">
                  <p-checkbox id="check_box_qb" type="checkbox" [ngModel]="checkedAll" [binary]="true"
                    (onChange)="checkAll($event)"></p-checkbox>
                </th>
                <th *ngFor="let col of cols" id="">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>

        <ng-template let-i="rowIndex" pTemplate="body" let-school>
            <tr class="p-selectable-row" [formGroup]="publisherForm.controls[i]">
                <td>
                    <!-- <p-tableCheckbox [value]="school"  formControlName="isSelected"></p-tableCheckbox> -->
                    <p-checkbox [binary]="true" (onChange)="check(i, school)" formControlName="isSelected"></p-checkbox>

                </td>

                <td pSortableColumn="school_name" style="flex-basis:25%">
                    <span class="p-column-title">Name</span>
                    {{school.school_name}}
                </td>

                <td class="select-box">
                    <p-multiSelect
                        formControlName="campus"
                        selectedItemsLabel="{0} items selected"
                        [maxSelectedLabels]="1"
                        optionLabel="label"
                        defaultLabel="Select campus"
                        [disabled]="!publisherForm.controls[i].get('isSelected').value"
                        (onChange)="campusChanage(publisherForm.controls[i])"
                        [options]="school.branches">
                    </p-multiSelect>
                </td>

                
                <td class="select-box">
                    <p-multiSelect
                        formControlName="department"
                        selectedItemsLabel="{0} items selected"
                        [maxSelectedLabels]="1"
                        optionLabel="label"
                        defaultLabel="Select department"
                        [disabled]="!publisherForm.controls[i].get('campus').value.length"
                        [options]="selectedDepartments[school.school_id]">
                    </p-multiSelect>
                </td>

                <td class="select-box">
                    <p-multiSelect
                        formControlName="batch"
                        selectedItemsLabel="{0} items selected"
                        [maxSelectedLabels]="1"
                        optionLabel="label"
                        defaultLabel="Select batch"
                        [disabled]="!publisherForm.controls[i].get('campus').value.length"
                        [options]="selectedBatchs[school.school_id]">
                    </p-multiSelect>
                </td>

                <!-- <td pEditableColumn class="select-box">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="school.school_name">
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{school.school_name}}
                        </ng-template>
                    </p-cellEditor>
                </td> -->

            </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="8">No schools found.</td>
            </tr>
        </ng-template>

    </p-table>
</div>
</div> 
