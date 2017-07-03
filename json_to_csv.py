import rows
import json

AND_FILE = "and.json"
FEND_FILE = "fend.json"
output_path = "output_csv/"

def get_record_data(data):
    record_data = []
    for elem in data:
        isfounded = False
        for record in record_data:
            if record['title'] == elem['title']:
                record['num'] += 1
                isfounded = True
        if isfounded == False:
            elem['num'] = 1
            record_data.append(elem)
    return record_data

def to_record_csv(json_file_path, output_name):
    with open(json_file_path) as data_file:
        data = json.load(data_file)

    data = get_record_data(data)

    data_table = rows.import_from_dicts(data)
    rows.export_to_csv(data_table, output_path + output_name)

to_record_csv(FEND_FILE, "fend.csv")