export function FormularioVeiculo(): string {
  return `
    <div class="modal fade" id="modalAdicionarVeiculo" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Adicionar Veículo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <form id="formVeiculo">
              <div class="mb-3">
                <label for="inputPlaca" class="form-label">Placa</label>
                <input type="text" class="form-control" id="inputPlaca" placeholder="ABC-1234" required />
              </div>
              <div class="mb-3">
                <label for="inputModelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="inputModelo" placeholder="Ex: Fiat Uno" required />
              </div>
              <div class="mb-3">
                <label for="selectStatus" class="form-label">Status</label>
                <select class="form-select" id="selectStatus" required>
                  <option value="Em Dia">Em Dia</option>
                  <option value="Manutenção Pendente">Manutenção Pendente</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSalvarVeiculo">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
