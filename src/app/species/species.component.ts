import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { SpeciesversionsService } from '../speciesversions.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  speciesVersionsFrom: FormGroup;
  species: {};
  versions: {};

  constructor(private speciesVersionsService: SpeciesversionsService) { }

  ngOnInit(): void {

    this.speciesVersionsService.getSpecies().subscribe(
      data => this.species = data
    );

    this.speciesVersionsFrom = new FormGroup({
      species: new FormControl(''),
      versions: new FormControl('')
    });
  }

  // tslint:disable-next-line:typedef
  onChangeSpecies(speciesId: object){ // TODO object대신에 number로 사용
    if (speciesId) {
      this.speciesVersionsService.getVersions(speciesId).subscribe(
        data => {
          this.versions = data;
        }
      );
    } else {
      this.versions = null;
    }
  }

}
