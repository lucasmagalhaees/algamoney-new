import { DecimalPipe, DatePipe } from '@angular/common';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
   lancamentos = [];

   @ViewChild('pesquisaLanc', {static: true}) grid;



  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

  constructor(
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private decimalPipe: DecimalPipe,
    private errorHandler: ErrorHandlerService,
    private datePipe: DatePipe,
    private lancamentoService: LancamentoService) {}



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then( resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  excluir(lancamento: any){
    this.lancamentoService.excluir(lancamento.codigo)
    .then(() => {
      this.grid.reset();

      this.toasty.success(`Lançamento ${lancamento.descricao} deletado com sucesso`);
    })
    .catch(erro => this.errorHandler.handle(erro));

  }

  confirmarExclusao(lancamento: any) {
    let valorFormatado = this.decimalPipe.transform(lancamento.valor, "1.2-2");
    let vencimentoFormatado = this.datePipe.transform(lancamento.dataVencimento, 'dd/MM/yyyy');
    // tslint:disable-next-line: max-line-length
    let pagamentoFormatado = this.datePipe.transform(lancamento.dataPagamento, 'dd/MM/yyyy');

    this.confirmation.confirm({
        message: `<b>Lançamento:</b> ${lancamento.descricao}
         <br> <b>Pessoa:</b> ${lancamento.pessoa}
         <br> <b>Vencimento:</b> ${vencimentoFormatado}
         <br> <b>Valor:</b> R$ ${valorFormatado}`,
                header: 'Tem certeza que deseja excluir o lançamento?',
        accept: () => {
            this.excluir(lancamento);
        }
    });


}
}
